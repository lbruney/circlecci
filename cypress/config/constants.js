const MSGS = {
    name: 'Portal-UI',
    search: 'Search',
    entity: 'Entity',
    create: 'Create',
    edit: 'Edit'
}

const URLS = {
    domain: 'https://data.dev.sennetconsortium.org/'
}

const PATHS = {
    search: `${URLS.domain}search`,
    edit: `${URLS.domain}edit`
}

const DATA = {
    source: {
        uuid: '',
        sennetId: ''
    },
    sample: {
        uuid: '75416aad581009b8f316a3d034a2bda0',
        sennetId: 'SNT496.QLMR.225'
    }
}

export { URLS, PATHS, MSGS }