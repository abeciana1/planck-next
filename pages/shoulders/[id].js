import React from 'react'
import PagePaper from '../../components/layouts/PagePaper'
import Header from '../../components/utils/Header'

class RedeemShoulders extends React.Component {

    //! sample -> AG3sJEV8Gb

    state = {
        attribution: "",
        idKey: ""
    }

    componentDidMount() {
        console.log(window.location.pathname.split('/')[2])
        // const router = useRouter()

        // console.log(router.query.id)

        this.setState({
            idKey: window.location.pathname.split('/')[2],
        })

        fetch("https://api.sheety.co/3c4e73c3bfbcbf603944bdd17c210881/planckShoulders/attributions")
            .then(res => res.json())
            .then(data => {
                for (let attr of data.attributions) {
                    if (attr.idKey === this.state.idKey) {
                        this.setState({
                        attribution: attr.attrMessage
                    })
                }
            }
        })
    }

    render() {
        // console.log(this.props.location.pathname.split('/')[2])

        
        return (
            <PagePaper>
                <Header />
                <div className="abstract">
                    <h4>You got an Attribution Grant!</h4>
                    <p>
                        You created something someone else used. When that someone received funds, they decided you should have some
                        too.
                        The funds you just got are a <i>portion of what they got</i>, yours because you helped make their work possible.
                        It's probably a small amount.<sup>1</sup>
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
                    {"You created something great: "}
                    {this.state.attribution}
                    {". And when someone else used it and received funds, they thought you should have some too."}
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
        )
    }
}

export default RedeemShoulders