import { useState } from "react";
import './App.css';

import Alert from "./components/Alert";

function App() {

  const upperCase = () => {
    console.log('you have clicked' + texts);
    let newText = texts.toUpperCase();
    setText(newText)
    showalert(' Text convert to upper case.')

  }
  const lowerCase = () => {
    console.log('you have clicked' + texts);
    let newText = texts.toLowerCase();
    setText(newText)
    showalert(' Text convert to lower case.')

  }

  const clearText = () => {
    let newText = "";
    setText(newText)
    showalert(' Your text is cleared.')

  }

  const onChange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }
  const [alert, setalert] = useState(null);
  const showalert = (message) => {
    setalert({
      msg: message
    })
    setTimeout(() => {
      setalert(null)

    }, 1500);
  }



  const [texts, setText] = useState('');
  const [btntext, newbtn] = useState('Dark mode')

  const [myStyle, setMyStyle] = useState({
    color: 'rgb(8, 4, 24)',
    backgroundColor: 'white'
  })


  const toggleStyle = () => {
    if (myStyle.color === 'rgb(8, 4, 24)') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(8, 4, 24)',

      })
      newbtn('Light mode')
      showalert(' dark mode is enable.')
    }
    else {
      setMyStyle({
        color: 'rgb(8, 4, 24)',
        backgroundColor: 'white'
      })
      newbtn('Dark mode')
      showalert(' light mode is enable.')

    }

  }
  const colors1 = () => {
    if (myStyle.color === 'rgb(8, 4, 24)') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(8, 36, 8)',

      })
      newbtn('Light mode')
      showalert(' color changed.')
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(8, 36, 8)',

      })
      showalert(' color changed.')


    }

  }
  const colors2 = () => {
    if (myStyle.color === 'rgb(8, 4, 24)') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(46, 11, 11)',

      })
      newbtn('Light mode')
      showalert(' color changed.')
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(46, 11, 11)',

      })
      showalert(' color changed.')

    }

  }
  const colors3 = () => {

    if (myStyle.color === 'rgb(8, 4, 24)') {

      setMyStyle({

        color: 'white',
        backgroundColor: 'rgb(52, 54, 10)',

      })


      newbtn('Light mode')
      showalert(' color changed.')
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'rgb(52, 54, 10)',

      })

      showalert(' color changed.')
    }



  }


  const copytext = () => {
    let text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    showalert(' Copy to clipboard.')
  }

  const splittext = () => {
    let newtext = texts.split(/[ ]+ /);
    setText(newtext.join(" "))
    showalert('extra space is removed.')


  }

  return (
    <>
   
      <div className="style" style={myStyle}>
        <nav className="nav" >

          <h2>Text Converter</h2>
         
          <div className='btn allbtn my-2'>
            <div className="color">
              <button type="submit" id="color1" onClick={colors1} class-name="btn   btn-primary my-2" > </button>

              <button type="submit" id="color2" onClick={colors2} class-name="btn  btn-primary my-2" > </button>

              <button type="submit" id="color3" onClick={colors3} class-name="btn btn-primary my-2" > </button>
            </div>


            <button type="submit" id="submit" onClick={toggleStyle} class-name="btn btn-primary my-2" > {btntext}</button>


          </div>

        </nav>
        <Alert alert={alert} />


        <div className='container' >
          <h2>Convert  Your Text Here.</h2>
          <textarea className='formcontrol' value={texts} id='mybox' onChange={onChange} rows="13"></textarea>

          <div className="button">
            <div className='btn my-2'>

              <button type="submit"disabled ={texts.length===0} class-name="btn btn-primary my-2" onClick={upperCase}>Upper case</button>
            </div>
            <div className='btn my-2'>
              <button type="submit"disabled ={texts.length===0} class-name="btn btn-primary my-2" onClick={lowerCase}>Lower case</button>
            </div>
            <div className='btn my-2'>
              <button type="submit"  disabled ={texts.length===0} class-name="btn btn-primary my-2" onClick={clearText}>Clear text</button>
            </div>
            <div className='btn my-2'>
              <button type="submit"disabled ={texts.length===0} class-name="btn btn-primary my-2" onClick={copytext}>Copy text</button>
            </div>

          </div>
          <div className='btn my-2'>
            <button type="submit" disabled ={texts.length===0}class-name="btn btn-primary my-2" onClick={splittext}>Remove extra spaces</button>
          </div>






          <div className="container my-4" >
            <h1> Your text summery.</h1>
            <p>{texts.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {texts.length} characters.</p>
            <p> {0.008 * texts.split(" ").filter((element)=>{return element.length!==0}).length}Mins needed to read.</p>

            <div>
              <div className="preview">
                <h2>Preview.</h2>
                <p>{texts.length > 0 ? texts : "Nothing to prieview!"}</p>
              </div>
            </div>


          </div>
        </div>

      </div>

    </>

  );
}

export default App;
