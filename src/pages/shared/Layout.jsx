import { Outlet } from 'react-router-dom';
import  Navbar from '../../components/Navbar';
import Footer  from '../../components/Footer';
// const PageContainer = styled.div`
// 	${tw`
//         flex
//         flex-col
//         w-full
//         h-screen
//         items-center
//         overflow-x-hidden
//     `}
// `;
function Layout() {
	return (
        <div className= ' flex flex-col min-h-screen'>

			<Navbar />
			{<Outlet />}
			<Footer />
		</div>
	);
}

export default Layout;
