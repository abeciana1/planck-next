import React from 'react'
// import PagePaper from '../../layouts/PagePaper'
import PagePaper from '../components/layouts/PagePaper'
// import MattProfile from '/matt-profile.jpeg'


const AboutMatt = () => {
    return (
        <PagePaper>
            <div>
                <span className="sidenote relative left-12">
                        <img className="profile-pic" src='/matt-profile.jpeg' alt="Matthew Stephenson" style={{"borderRadius": "100px", "height": "200px"}} />
                </span>
            </div>
            <h1 className="text-xl font-bold">About Matt</h1>
        <div className="pt-5">
            <p>
                We at Planck challenged Matt Stephenson to do one simple thing: leave out all his many failures and instead just provide a list of things to try and make him sound awesome:
                <h4 className="pt-10 text-xl font-semibold">Academic Stuff:</h4>
                <ul className="list-disc">
                    {/* <div className="text-lg font-medium">Academic stuff:</div> */}
                    <li>Fulbright Scholar</li>
                    <li>PhD(c) Behavioral Economics and Strategy, Columbia</li>
                    <li>MSc Economics Warwick (Awarded Best Thesis)</li>
                    <li>Publications include: Journal of Economics Behavior and Organization, Strategic Management Journal, Harvard Economic</li>
                    <li>Review, Encyclopedia of Behavioral Economics</li>
                    <li>Consulting includes Unilever, NY Federal Reserve</li>
                </ul>
                <h4 className="pt-4 text-xl font-semibold">Crypto Stuff:</h4>
                <ul className="list-disc">
                    <li>2011 MSc Econometrics Thesis on Bitcoin</li>
                    <li>Helped solve a $12m Ponzi on Ethereum</li>
                    <li>Consulting for Dapper Labs</li>
                    <li>2018 essay on NFTs for Science was honored in a16z’s “NFT Canon”</li>
                    <li>Created and sold first the Science NFT</li>
                    <li>Gave Keynote at Ethereum’s first NFT Summit in 2018</li>
                    <li>OGNFT 2021 Talk on Behavioral Economics and NFTs</li>
                </ul>
            </p>
        </div>
        </PagePaper>
    )
}

export default AboutMatt