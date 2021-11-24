class Temperature extends React.Component {

    render (){
        return <div className="flex">
                    <p>Entrez votre température en °C</p>
                   <input type="text" value={this.state.c} onChange={this.chgInputC}/>
              
                    <p>Entrez votre température en °F</p>
                    <input type="text" value={this.state.f} onChange={this.chgInputF}/>
                </div>
    }
constructor(props){
    super(props)
    this.state ={c:0,f:32}
    this.chgInputC = this.chgInputC.bind(this)
    this.chgInputF = this.chgInputF.bind(this)
}

chgInputC(event) {
    console.log(event.target.value)
    this.setState({ c: event.target.value })
    this.setState({ f: (event.target.value*9/5)+32 })
}
chgInputF(event) {
    console.log(event.target.value)
    this.setState({ f: event.target.value })
    this.setState({ c: (event.target.value-32)*5/9 })
}
}



ReactDOM.render(<Temperature/>, document.getElementById("app"))