import React, { useState } from 'react';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/ui/Badge';
import { NavButton, NavItem, NavSeparator } from '../../../components/layouts/Navigation/Nav';
import { appPages, authPages } from '../../../config/pages.config';
import User from '../../../components/layouts/User/User';
import { useAuth } from '../../../context/authContext';

const UserTemplate = () => {
	const [loading, setLoading] = useState(false);
	// const { isLoading, userData, onLogout } = useAuth();

	return (
		<User
			isLoading={loading}
			name={'Hola'}
			nameSuffix={!loading && <Icon icon='HeroCheckBadge' color='blue' />}
			position={'Software Developer'}
			src={''}
			suffix={
				<Badge color='amber' variant='solid' className='text-xs font-bold'>
					PRO
				</Badge>
			}>
			<NavSeparator />
			<NavItem {...authPages.profilePage} />
			{/* <NavItem {...appPages.mailAppPages.subPages.inboxPages}>
				<Badge variant='solid' className='leading-none'>
					3
				</Badge>
				<NavButton icon='HeroPlusCircle' title='New Mail' onClick={() => {}} />
			</NavItem> */}
			<NavItem text='Logout' icon='HeroArrowRightOnRectangle'  />
		</User>
	);
};

export default UserTemplate;
