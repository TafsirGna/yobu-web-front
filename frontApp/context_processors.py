def app_context_processor(req):
    return {
        'APP_ICON_PATH': 'https://img.icons8.com/cotton/64/000000/shopping-bag--v5.png',
        'APP_NAME': 'Yobu',
        'APP_VERSION': 'beta',
        'OTHER_APPS': {'Zemini': {"logo_path": "https://img.icons8.com/cotton/64/000000/box--v1.png", "app_url": "https://zemini.herokuapp.com", "description": "Zemini is a web app designed to allow two friends to sync their video stream with features alike Netflix Watch Party."}},
    }