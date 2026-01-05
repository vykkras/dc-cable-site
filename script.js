const anchorLinks = document.querySelectorAll('a[href^="#"]')

anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')
    if (!targetId || targetId === '#') return
    const target = document.querySelector(targetId)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const quoteForm = document.getElementById('quote-form')
if (quoteForm) {
  const successMessage = quoteForm.querySelector('.form-success')
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (successMessage) {
      successMessage.textContent =
        'Thanks! Your request is ready. We will contact you shortly.'
    }
    quoteForm.reset()
  })
}

const serviceDetails = document.querySelectorAll('.detail-card')
serviceDetails.forEach((detail) => {
  const summary = detail.querySelector('summary')
  if (!summary) return
  summary.addEventListener('click', (event) => {
    event.preventDefault()
    const willOpen = !detail.open
    serviceDetails.forEach((other) => {
      other.open = false
    })
    detail.open = willOpen
  })
})

const heroVideoA = document.getElementById('hero-video-a')
const heroVideoB = document.getElementById('hero-video-b')
if (heroVideoA && heroVideoB) {
  const sources = [
    'videos/stock1.mp4',
    'videos/stock2.mp4',
    'videos/stock3.mp4',
    'videos/stock4.mp4',
  ]
  let queue = []
  let activeVideo = heroVideoA
  let idleVideo = heroVideoB
  let idleReady = false
  let transitioning = false

  const shuffle = (list) => {
    const copy = [...list]
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const pickNext = () => {
    if (queue.length === 0) {
      queue = shuffle(sources)
    }
    return queue.shift()
  }

  const swapVideos = () => {
    idleVideo.classList.add('is-active')
    activeVideo.classList.remove('is-active')
    activeVideo.pause()
    activeVideo.currentTime = 0
    const temp = activeVideo
    activeVideo = idleVideo
    idleVideo = temp
  }

  const preloadIdle = () => {
    const nextSrc = pickNext()
    if (!nextSrc) return
    idleReady = false
    idleVideo.src = nextSrc
    idleVideo.load()
    idleVideo.addEventListener(
      'canplay',
      () => {
        idleReady = true
      },
      { once: true },
    )
  }

  const startTransition = () => {
    if (!idleReady || transitioning) return
    transitioning = true
    idleVideo.play().then(() => {
      swapVideos()
      setTimeout(() => {
        transitioning = false
        preloadIdle()
        attachActiveHandlers()
      }, 800)
    }).catch(() => {
      transitioning = false
    })
  }

  const handleTimeUpdate = () => {
    if (!activeVideo.duration || !idleReady) return
    if (activeVideo.duration - activeVideo.currentTime < 0.4) {
      startTransition()
    }
  }

  const attachActiveHandlers = () => {
    activeVideo.removeEventListener('ended', startTransition)
    activeVideo.removeEventListener('error', startTransition)
    activeVideo.removeEventListener('timeupdate', handleTimeUpdate)
    activeVideo.addEventListener('ended', startTransition)
    activeVideo.addEventListener('error', startTransition)
    activeVideo.addEventListener('timeupdate', handleTimeUpdate)
  }

  activeVideo.classList.add('is-active')
  const firstSrc = pickNext()
  if (firstSrc) {
    activeVideo.src = firstSrc
    activeVideo.play().catch(() => {})
  }

  preloadIdle()
  attachActiveHandlers()
}
