import {Component} from 'react'
import ResponsiveAppBar from '../components/appBarComponent';
class HeaderComponent extends Component {
    render() { 
        return (
            <header>
                <ResponsiveAppBar/>
            </header>
        );
    }
}
 
export default HeaderComponent;