import React, {useEffect} from 'react'

const Ps = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - SIDC`;
        //eslint-disable-next-line
    }, [])
  return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>NEWS</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>NEWS</li>
          </ol>
        </div>

      </div>
    </section>
    <div className='container' style={{textAlign:'center'}}> <br /><br /><br /><br /><br /><br /><br />
        <h1>Welcome to NEWS</h1> <br /><br /><br /><br /><br /><br />
    </div>
    </>
  )
}

export default Ps