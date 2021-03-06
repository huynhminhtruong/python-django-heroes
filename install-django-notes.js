python = {
    version: '3.5.4', 
    install: {
        HomeBrew: 'brew install python3'
    }
}

environment = {
    install_virtualenv: {
        cd_project: 'cd project-name', 
        install: 'pip install virtualenv', 
        create_new_virtual_environment: 'virtualenv -p python name-of-environment', 
        activate_virtualenv: 'source name-of-environment/bin/activate', 
        deactivate_virtualenv: 'deactivate'
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
    }, 
    create_project: 'django-admin startproject project-name', 
    create_app: 'python manage.py startapp app-name', 
    create_user: 'python manage.py createsuperuser'
}

database = {
    create_activate_model: 'python manage.py makemigrations name-of-app', 
    apply_installed_app: 'python manage.py migrate', 
    'the sqlmigrate command takes migration names and returns their SQL': 'python manage.py sqlmigrate polls 0001', 
    'run the migrations for you and manage your database schema automatically - that’s called migrate': 'python manage.py migrate'
}

structure = {
    'These files are': {
        'The outer mysite/': 'root directory is just a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.'
        'manage.py': 'A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py.'
        'The inner mysite/': 'directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. mysite.urls).'
        'mysite/__init__.py': 'An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.'
        'mysite/settings.py': 'Settings/configuration for this Django project. Django settings will tell you all about how settings work.'
        'mysite/urls.py': 'The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.'
        'mysite/wsgi.py': 'An entry-point for WSGI-compatible web servers to serve your project. See How to deploy with WSGI for more details.'
    }
}

config: {
    django: {
        'Change port': 'python manage.py runserver 8080', 
        'Change IP vs Port': 'python manage.py runserver 0:8000'
    }
}
