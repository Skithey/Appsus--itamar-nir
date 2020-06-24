import { utilsService } from '../../utils/utils-service.js';

export const emailsService = {
    getEmails,
    getById,
    removeEmail
}
var recivedHour = new Date().getHours();
var recivedMin = new Date().getMinutes();
var recivedTime = recivedHour + ':' + recivedMin
var gEmails = [
    { id: utilsService.getRandomId(), subject: 'Zoom', body: 'Pick up!', desc: 'Zoom is a very nice app', isRead: false, sentAt: recivedTime },
    { id: utilsService.getRandomId(), subject: 'shishlik?', body: 'Pickeda up!', desc: 'shishlik is a very nice food', isRead: true, sentAt: recivedTime },
]
const EMAIL_INFO = 'emails'

function getEmails() {
    if (!localStorage.emails || !localStorage.emails.length) {
        utilsService.saveToStorage(EMAIL_INFO, gEmails);
        return Promise.resolve(gEmails)
    } else {
        const emails = utilsService.loadFromStorage(EMAIL_INFO);
        return Promise.resolve(emails)
    }
}

function getById(emailId) {
    return getEmails()
        .then(emails => {
            return emails.find(email => {
                return email.id === emailId
            })
        })
}

function removeEmail(emailId) {
    const emailToDeleteIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails.splice(emailToDeleteIdx, 1);
    utilsService.saveToStorage(EMAIL_INFO, gEmails)
}