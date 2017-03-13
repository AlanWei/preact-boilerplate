import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
  render() {
    return (
			<header class={style.header}>
				<Link href="/"><h1>Home</h1></Link>
			</header>
    );
  }
}
