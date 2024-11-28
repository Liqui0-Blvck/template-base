import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../components/layouts/Container/Container';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../components/layouts/Subheader/Subheader';
import Card, { CardBody, CardFooter, CardFooterChild } from '../../components/ui/Card';
import Button, { IButtonProps } from '../../components/ui/Button';
import useSaveBtn from '../../hooks/useSaveBtn';
import Icon from '../../components/icon/Icon';
import Badge from '../../components/ui/Badge';
import useDarkMode from '../../hooks/useDarkMode';
import { TDarkMode } from '../../types/darkMode.type';
import { RootState } from '../../store/rootReducer';
import EditProfile from './EditProfile.component';
import PasswordComponent from './Password.component';
import TwoFactorConfig from './TwoFactorConfig.component';
import NewlettersComponent from './NewlettersComponent.component';
import SessionsComponent from './SessionsComponent.component';
import ThemeComponent from './ThemeComponent.component';
import { updateProfileData } from '../../store/slices/auth/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import toast from 'react-hot-toast';
import { TIcons } from '../../types/icons.type';


type TTab = {
	text:
		| 'Editar Perfil'
		| 'Password'
		| '2FA'
		| 'Boletín de noticias'
		| 'Sesiones'
		| 'Temas';
	icon: TIcons;
};
type TTabs = {
	[key in
		| 'EDIT'
		| 'PASSWORD'
		| '2FA'
		| 'NEWSLETTER'
		| 'SESSIONS'
		| 'THEME']: TTab;
};
const TAB: TTabs = {
	EDIT: {
		text: 'Editar Perfil',
		icon: 'HeroPencil',
	},
	PASSWORD: {
		text: 'Password',
		icon: 'HeroKey',
	},
	'2FA': {
		text: '2FA',
		icon: 'HeroShieldExclamation',
	},
	NEWSLETTER: {
		text: 'Boletín de noticias',
		icon: 'HeroBell',
	},
	SESSIONS: {
		text: 'Sesiones',
		icon: 'HeroQueueList',
	},
	THEME: {
		text: 'Temas',
		icon: 'HeroSwatch',
	},
};

const ProfilePage = () => {
	const { i18n } = useTranslation();
	const { setDarkModeStatus } = useDarkMode();
	const [isSaving, setIsSaving] = useState<boolean>(false);
	const [activeTab, setActiveTab] = useState<TTab>(TAB.EDIT);
	const { user } = useAppSelector((state: RootState) => state.auth.user)

	const dispatch = useAppDispatch()

	const defaultProps: IButtonProps = {
		color: 'zinc',
	};
	const activeProps: IButtonProps = {
		...defaultProps,
		isActive: true,
		color: 'blue',
		colorIntensity: '500',
	};



	// useEffect(() => {
	// 	setDarkModeStatus(formik.values.theme as TDarkMode);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [formik.values.theme]);





	return (
		<PageWrapper name={user?.displayName!}>
			<Subheader>
				<SubheaderLeft>
					{`${user?.displayName}`}{' '}
					<Badge
						color='blue'
						variant='outline'
						rounded='rounded-full'
						className='border-transparent'>
						Editar Usuario
					</Badge>
				</SubheaderLeft>
			</Subheader>
			
			<Container className='h-full'>
				<Card className='h-full'>
					<CardBody>
						<div className='grid grid-cols-12 gap-4'>
							<div className='col-span-12 flex gap-4 max-sm:flex-wrap sm:col-span-4 sm:flex-col md:col-span-3'>
								{Object.values(TAB).map((i) => (
									<div key={i.text}>
										<Button
											icon={i.icon}
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...(activeTab.text === i.text
												? {
														...activeProps,
												  }
												: {
														...defaultProps,
												  })}
											onClick={() => {
												setActiveTab(i);
											}}>
											{i.text}
										</Button>
									</div>
								))}
								<div className='border-zinc-500/25 dark:border-zinc-500/50 max-sm:border-s sm:border-t sm:pt-4'>
									<Button icon='HeroTrash' color='red'>
										Eliminar Cuenta
									</Button>
								</div>
							</div>
							<div className='col-span-12 flex flex-col gap-4 sm:col-span-8 md:col-span-9'>
								{activeTab === TAB.EDIT && (
									<EditProfile/>
								)}
								
								{activeTab === TAB.PASSWORD && (
									<PasswordComponent/>
								)}
								{activeTab === TAB['2FA'] && (
									<TwoFactorConfig/>
								)}
								{activeTab === TAB.NEWSLETTER && (
									<NewlettersComponent/>
								)}
								{activeTab === TAB.SESSIONS && (
									<SessionsComponent />
								)}
								
								{activeTab === TAB.THEME && (
									<ThemeComponent/>
								)}
							</div>
						</div>
					</CardBody>
				</Card>
			</Container>
		</PageWrapper>
	);
};

export default ProfilePage;
