import React from 'react'
import Axios from 'axios'
// import FormData from 'form-data'

import FileUpload from './newForm'



class NewStudentForm extends React.Component {
    state = {
        file: null
    }

    // updateData = (evt) => {


    //     if (evt.target.name == "file") {

    //         let file = evt.target.files

    //         this.setState({
    //             file: file
    //         })


    //     } else {

    //         this.setState({
    //             [evt.target.name]: evt.target.value
    //         })

    //     }



    // }


    // createAd = (evt) => {

    //     evt.preventDefault();
    //     // services.createAd(this.state);
    //     // const formData = new formData()


    //     // formData.append('desc', this.state.psw);
    //     // formData.append('price', this.state.psw);
    //     let file = this.state.file
    //     let formData
    //      formData = new formData()
    //     formData.append('images', file)

    //     Axios({
    //         url: '/upload',
    //         method: "POST",
    //         headers: {
    //             authorization: 'your token'
    //         },
    //         data: formData
    //     }).then((res) => {
    //         console.log(res)
    //     })






        // Axios.post('/upload' , this.state ).then(res =>{

        //     console.log(res)
        // })

        // const res = Axios.post('/upload', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // });




    // }

    render() {

        return (<div className="container mt-4">
            <h4 className="display-4 text center mb-4">New Student Form</h4>


            <form>

          
            <FileUpload/>
               

                

            </form>

        </div>)
    }
}

export default NewStudentForm