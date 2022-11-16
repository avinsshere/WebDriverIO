# WebDWebdriverIO

## install Node.js

```
1. Go to the Node.js Downloads page
2. Download Node.js for macOS by clicking the "Macintosh Installer" option
3. Run the downloaded Node.js .pkg Installer
4. Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
5. You're finished! To ensure Node.js has been installed, run node -v in your terminal - you should get something like v6.9.4

Ref : https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/
```

## Initiate a WebdriverIO Setup

run

```
npm init wdio .
```

## TO Run Test

```
npx wdio run wdio.conf.js
```

## TO Generate Report

```
1. Install Alluru
   npm install @wdio/allure-reporter --save-dev
2. Configure the output directory in your wdio.conf.js file:

    exports.config = {
        // ...
        reporters: [['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]],
        // ...
    }
3. Install the Allure command-line tool
   npm install -g allure-commandline --save-dev

4. Generate report
   allure generate allure-results --clean && allure open
```
