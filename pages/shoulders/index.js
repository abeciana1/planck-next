import React from 'react';
import PagePaper from '../../components/layouts/PagePaper'
import Header from '../../components/utils/Header'

// const Shoulders = (props) => {

//     return (
//         <h1>Shoulders</h1>
//     )
// }

class Shoulders extends React.Component {

    state = {
        attribution: "",
        idKey: ""
    }

    attributionHandler = (e) => {
        this.setState({
            attribution: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log("submit")
        
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 10; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        let idKey = result.join('')
        this.setState({
            idKey: idKey
        })

        // this.attributionKeyCreator()
        this.sendAttributionToApi(idKey, this.state.attribution)
    }

    // attributionKeyCreator = () => {
        
    //     console.log(idKey)
    //     return idKey
    // }

    sendAttributionToApi = (idKey, formData) => {
        console.log("formData", formData)
        console.log("idKey", idKey)

        let body = {
            attribution: {
                idKey: idKey,
                attrMessage: formData
            }
        }

        fetch("https://api.sheety.co/3c4e73c3bfbcbf603944bdd17c210881/planckShoulders/attributions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    render() {
        return (
            <React.Fragment>

                <PagePaper>
                    <Header/>
                    <div className="abstract">
                        <h4>You got an Attribution Grant!</h4>
                        <p>
                            You created something someone else used. When that someone received funds, they decided you should have some
                            too.
                            The funds you just got are a <i>portion of what they got</i>, yours because you helped make their work possible.
                            It's probably a small amount.<sup>1</sup>
                            {/* <br/>
                            <br /> */}
                            <div>
                                <span class="sidenote">
                                    <div class="note">
                                        <sup>1</sup>
                                        For now?
                                    </div>
                                </span>
                            </div>
                        </p>
                        <br />
                        <br />
                            {/* <div></div> */}
                            <form onSubmit={this.submitHandler}>
                            {"You created something great: "}
                                <input
                                placeholder = "Type your attribution"
                                type="text"
                                style={{"border":"none", "backgroundColor": "transparent"}}
                                value={this.state.attribution}
                                onChange={this.attributionHandler}
                                maxLength="1000"
                                />
                                {". And when someone else used it and received funds, they thought you should have some too."}
                                <br />
                                <br />
                                {this.state.attribution.length > 0 ?
                                <>
                                    <input
                                        type="submit"
                                        className="note"
                                        style={{"border":"1px solid #f8f8f8"}}
                                    />
                                </>
                                    :
                                null
                                }
                            </form>
                            {this.state.idKey.length > 0 ? 
                            <>
                            <h4>Your link is here: <a href={"https://www.p1anck.com/shoulders/" + this.state.idKey} target="_blank" rel="noreferrer">https://www.p1anck.com/shoulders/{this.state.idKey}</a></h4>
                            </>
                            : null}
                            {/* <button id="btn-lookup" className="note" style={{"border": "1px solid #f8f8f8"}}>Lookup Your Key</button> */}
                    </div>
                    <p style={{"textAlign":"center"}}>
                        If what you received is
                        significant, consider sending some to those whose work yours depended on.
                        We suggest a norm of keeping half for yourself and then sending half split among 1-5 creators that made your
                        work possible (take your best guess.)
                        You can send them this note too.
                    </p>

                    <p style={{"padding": "3em 0 0 0"}}></p>
                
                        <blockquote style={{"textAlign":"center"}}>
                            "If I have seen further than others, it is by standing upon the shoulders of giants."
                            <cite>— Isaac Newton</cite>
                        </blockquote>
                </PagePaper>
            </React.Fragment>
        )
    }
}

export default Shoulders