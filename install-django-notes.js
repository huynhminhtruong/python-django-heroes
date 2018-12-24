python = {
    version: '3.5.4', 
    install: {
        HomeBrew: 'brew install python3'
    }
}

django = {
    download: 'curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py', 
    install_pip: 'python get-pip.py', 
    upgrade_pip: {
        macOS: 'pip install -U pip', 
        windows: 'python -m pip install -U pip'
    }, 
    install_django: 'pip install Django', 
    check_django_version: {
        verify: `
            python
            >>> import django
            >>> print(django.get_version())
        `, 
        commandline: 'python -m django --version'
    }
}

database = {

}