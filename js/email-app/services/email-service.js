import { utilsService } from '../../utils/utils-service.js';

export const emailsService = {
    getEmails
}

var gEmails = [
    { id: utilsService.getRandomId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilsService.getRandomId(), subject: 'shishlik?', body: 'Pickeda up!', isRead: true, sentAt: 1551733930594 }
]
const EMAIL_INFO = 'emails'

function getEmails() {
    utilsService.saveToStorage(EMAIL_INFO, gEmails);
    return Promise.resolve(gEmails)
}