import instance from './instance'

export function postEntrepreneurs(userName, phoneNumber) {
    return instance.post('/person', { userName, phoneNumber })
}

export function getEntrepreneurs() {
    return instance.get('/person')
}