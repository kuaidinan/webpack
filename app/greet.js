import React,{Component} from 'react';
import  config from './config.json';
import  styles from './greet.css';
class Greeter extends Component{
	render(){
		return(
			<div className={styles.root}>
				{config.info}
			</div>
		)
	}
}
export default Greeter