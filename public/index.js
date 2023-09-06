const contactForm = document.getElementById('contact-form')
const contactSubject = document.getElementById('contact-subject')
const contactBody = document.getElementById('contact-body')
const contactSentText = document.getElementById('contact-sent-text')
const contactSubmit = document.getElementById('contact-submit')

contactSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const emailAddress = "contact@tyleremanuel.com"
    const emailSubject = contactSubject.value
    const emailBody = contactBody.value

    // opens user email app
    location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`

    contactForm.style.display = "none"
    contactSentText.style.display = "flex"
    setTimeout(() => {
        contactSubject.value = ""
        contactBody.value = ""
        contactSentText.style.display = "none"
        contactForm.style.display = "grid"
    }, 3000)
})

