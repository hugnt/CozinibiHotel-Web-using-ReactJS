
import logo from './loading.png';
//css
import './Loading.css'
import SectionPart from '../SectionPart';

function Loading() {
    window.scrollTo(0, 0);
    return (
        <SectionPart bgColor="bg-white">
            <header className="Loading-header">
                <img src={logo} className="Loading-logo" alt="logo" />
                <div className='Loading-desc'>Loading....</div>
            </header>
        </SectionPart>
    );
}

export default Loading;