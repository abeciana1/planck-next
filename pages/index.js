import React from 'react';

import Head from 'next/head'
import PagePaper from '../components/layouts/PagePaper'
import Header from '../components/utils/Header'


export default function Home() {
  return (
    <React.Fragment>
      <PagePaper>
        <Header />
        <div>
          <h1
            className="text-4xl font-bold text-center"
          >Planck sold the first Science NFT for $24k. Here's what we did... and what we're doing next.</h1>
          <p className="text-center">
            April 2021
          </p>
        </div>
        <div>
          <h4
            className="text-xl font-semibold"
          >Abstract</h4>
            <div
              className="mx-5 py-3"
            >
              <p>
                  <b>Planck is an incentive system for open innovation using non-fungible digital manuscripts on Ethereum. </b>
                  We call these original manuscripts "Glyphs." Original manuscripts of important scientific and innovative works have long been uniquely valuable, and by initiating a novel incentive design around Glyphs we have developed a system to reward thinkers, innovators, and creators.
                  <b>Planck can be thought of as creating an “alt-patent” system;</b> a non-legal framework for attribution and financial rewards for those who do time-consuming, valuable, knowledge work.
                  We believe this is essential in the larger project of improving the knowledge commons, helping us all think and create together better.
              </p>
            </div>
            <br/>
            <hr class="solid"></hr>
            <nav className="toc pt-5">
                <h2 className="text-xl font-bold">Contents</h2>
                    <ol>
                        <li>
                            <a href="#current-test">First Alpha: NFTs for Open Innovation</a>
                            <ol>
                                <li><a href="#seth-theory">How we tested "Seth's Appetite Theory" the Web3 way</a></li>
                                <li><a href="#why-seth">Next Steps on Seth's Theory</a></li>
                            </ol>
                        </li>
                        <li><a href="#current-test">Second Alpha: Incentives for Citations and Attribution</a></li>
                        <li><a href="#conclusion">The Big, Big Picture: Technology Revolutions don't work until they're patched</a></li>
                    </ol>
            </nav>
        </div>
      </PagePaper>
    </React.Fragment>
  )
}
