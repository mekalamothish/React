# Namaste React 🚀 
package.json is the configuration for npm
  1.nmp is a package manager
  2.packages arealso known as dependeses
now we configured the npm in our project

# web pack bundler
,parsel,vite there are all bundler.

now we are going to use the parcel it will ignit you app it will give energy to app.
1.install the tat parcel using npm
        npm install -D parcel    --> -D  there inpendence or packings i. Dev dependences(developenment) 2.normal dependence (production)
          -D it indicates the dev dependence 
        
          "devDependencies": {
    "parcel": "^2.12.0"
  }
  it is add in package.json file.
  what is caret (^) this symbol & tilde(~)
  caret(^) will help to update to the new minor version autometicaly 2.12.1,2.12.2 . // it is safe 
  tilde(~) it will install the major version 3.0
 and also one new file is also add package-lock.json. 
  what is package-lock.json?  it is going to trake of the exact version .it keeps the record of version

  "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
  this hashing (if )


  #going to ignight our app
     using the parcel  to ignight or build the app
       -->command ---> npx parcel index.html
--> install the react with the npm
       using -->  npm install react
--> install the reactDom
        npm insatll react-dom



# parcel
- Dev Build 
- Local server
- HMR = Hot module replacement
- parcel use the File Watching algorithm - written C++
- Reliable Caching - Faster Buildd -(.partial-cache)hold byte files
- parcel will do Images optimaization
- parcel will minification
- Bundling
- Compressing
- consisten hashing
- code splitting
- Differential Bundling - to support older browser
- Diagnostic
- Error handling
- hosting Https
- Tree Shaking algorithm - remove unused code for you
- creats the defferent dev and production build
----parceljs.org to study more

// creating the prod bulid (production build)
npx parcel build index.html

browserList ? https://browserlist.dev


