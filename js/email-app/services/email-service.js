import { utilsService } from '../../utils/utils-service.js';

export const emailsService = {
    getEmails,
    getById,
    removeEmail,
    addEmail,
    changeIsRead,
    changeEmailImp
}
const EMAIL_INFO = 'emails'
var recivedHour = new Date().getHours();
var recivedMin = new Date().getMinutes();
var recivedTime = recivedHour + ':' + recivedMin
var gEmails = (() => {
    var emails = utilsService.loadFromStorage(EMAIL_INFO);
    if (!emails) {
        emails = createDefaultEmails();
        utilsService.saveToStorage(EMAIL_INFO, emails);
    }
    return emails;
})();

function createDefaultEmails() {
    return [
        { id: utilsService.getRandomId(), from: 'Itamar', subject: 'Zoom', desc: 'Zoom is a very nice app', isRead: false, isImportant: true, sentAt: recivedTime },
        { id: utilsService.getRandomId(), from: 'Itamar', subject: 'shishlik?', desc: 'shishlik is a very nice food', isRead: true, isImportant: false, sentAt: recivedTime },
        { id: utilsService.getRandomId(), from: 'Itamar', subject: 'JS is fun', desc: 'JS is good for your health', isRead: true, isImportant: false, sentAt: recivedTime },
    ]
}

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
    // console.log(emailId);
    return getEmails()
        .then(emails => {
            return emails.find(email => {
                return email.id === emailId
            })
        })
}

// function changeIsRead(emailId) {
//     getById(emailId)
//         .then(email => {

//         })

// }
function changeEmailImp(emailId) {
    const emailToChangeIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails[emailToChangeIdx].isImportant = !gEmails[emailToChangeIdx].isImportant
    utilsService.saveToStorage(EMAIL_INFO, gEmails)
    return emailToChangeIdx
}

function changeIsRead(emailId) {
    const emailToChangeIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails[emailToChangeIdx].isRead = !gEmails[emailToChangeIdx].isRead
    utilsService.saveToStorage(EMAIL_INFO, gEmails)
    return emailToChangeIdx
}

function removeEmail(emailId) {
    const emailToDeleteIdx = gEmails.findIndex(email => email.id === emailId);
    gEmails.splice(emailToDeleteIdx, 1);
    // console.log(gEmails)
    utilsService.saveToStorage(EMAIL_INFO, gEmails)
    return Promise.resolve(gEmails)
}


function addEmail(to, subject, desc, from) {
    const email = {
        id: utilsService.getRandomId(),
        from,
        subject,
        to,
        desc,
        isImportant: false,
        isRead: true,
        sentAt: recivedTime
    }
    gEmails.push(email)
    utilsService.saveToStorage(EMAIL_INFO, gEmails)
    return Promise.resolve(email)
}