import React from 'react'
import Header from './header'
import Top from './top'
import Choose from './choose'
import How from './how-it-works'
import CustomFooter from './footer'
import Cta from './cta'

export default function Landing() {
    return (
        <div>
            <Top/>
            <Header/>
            <div className="About">
                <h4 className="center-align"> About Us</h4>
                <div className="About-section">
                    <p className="center-align"> lorem40 heur ngberjg ndgbjerg nfgbjwegw fnwbeh
                         gngbee gej ertjherj gergnrje i gie ier jdsua b iafnif fhdfia sduv a hdsu fsjk zvlm ozck asdhf vss sf sufwif syfwei zfuhweyg sfwey s uwfywif z s iws s bisfu ahdi d gai a. fahdga <br/> afwif wfio aefo wegho weuh sfytweyg sdfuhwifus f sufwo  so  skfjiof hsofoi fh sfhowf  sofos  ojh k   emryn3 yiyi eryjer stjwo js wjiewth thuwrtgurt skms kssss sjdb sgtw  hust k t  stgsgisf sgi rg wthuh ts srthiut sg   ut yt tuitg i utfusdiffg  yftuigsuyd y tfsyx x fs fs rzdusfi jd u

                    </p>
                    
                </div>

            </div>
            <div id="choose-us"> 
                <h4 className="center-align"> So why choose us? </h4>
                
                <Choose/>
            </div>
            <div id="testimonial">
                <h4 className="center-align"> How it Works... </h4>
                <How/>
            </div>
            <div>
                <Cta/>
            </div>
            <div>
                <CustomFooter/>
            </div>
        </div>
    )
}
