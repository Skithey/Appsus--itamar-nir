import { utilsService } from '../../utils/utils-service.js';

export const emailsService = {
    getEmails
}

var gEmails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 }
]
const EMAIL_INFO = 'emails'

function getEmails() {
    utilsService.saveToStorage(EMAIL_INFO, gEmails);
    return Promise.resolve(gEmails)
}