import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            imageURL: '',
            productName: '',
            price: ''
        }
    }
    // handleCancel(){
    //     this.setState({image:''})
    //     this.setState({product:''})
    // }
    handleURLChange(input){
        this.setState({imageURL:input});
        console.log(this.state.imageURL);
    }
    submit(event){
        alert('A new product was submitted: ' + this.state.product);
        event.preventDefault();
      }
    
    handleProduct(input){
        this.setState({productName:''});
        console.log(this.state.productName);
    }
    submit(){
        alert(`You submitted the url!`)
    }
    handleChangeURL(input){
        this.setState({imageURL:input})
        console.log(this.state.imageURL);
    }
    render(){
        return (
        <div>
            <form>
                <input onChange={(e) => this.handleChangeURL(e.target.value)}/>
                <button onClick={this.submit} >submit</button>
            </form>
        </div>
        )
    }
}
export default Form
