import React,{Component} from 'react'
import Description from './Description.js'
import Description2 from './Description2.js'
import Description3 from './Description3.js'
import Description4 from './Description4.js'
import Description5 from './Description5.js'
import EB from './EB.jpg'
import altj from './altj.jpg'
import jd from'./jd.jpg'
import metallica from'./metallica.png'
import desire from './desire.jpg'
class Content extends Component{
    render(){
        return(
            <ol>
                <li>Bag Lady - Erykah Badu</li>
                <img src={EB}/>
                <Description/>
                <li>Breezeblocks - Alt j</li>
                <img src={altj}/>
                <Description2/>
                <li>Disorder - Joy Division</li>
                <img src={jd}/>
                <Description3/>
                <li>One - Metallica</li>
                <img src={metallica}/>
                <Description4/>
                <li>Under Your Spell-Desire</li>
                <img src={desire}/>
                <Description5/>
            </ol>
        )
    }
}


export default Content
