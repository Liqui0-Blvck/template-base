import React, { Dispatch, FC, SetStateAction } from 'react';
import Button, { IButtonProps } from '../../../components/ui/Button';
import { TTabs } from '../../../types/registros types/TabsDashboardPrograma.types';
import { TTabsPro } from '../../../types/registros types/TabsDetalleProyeccion.types';

interface IPeriodButtonsPartialProps {
	activeTab: TTabsPro;
	setActiveTab: Dispatch<SetStateAction<TTabsPro>>;
}
const ButtonsTabsProyeccion: FC<IPeriodButtonsPartialProps> = (props) => {
	const { activeTab, setActiveTab } = props;

	const defaultProps: IButtonProps = {
		size: 'sm',
		color: 'zinc',
		rounded: 'rounded-full',
	};
	const activeProps: IButtonProps = {
		...defaultProps,
		isActive: true,
		color: 'blue',
		colorIntensity: '500',
		variant: 'solid',
	};


	const OPTIONSPRO: any = {
		MUESTRA_PEPA: { text: 'Muestra Control' },
		CONTROL_PEPA: { text: 'Control Pepa' },
		CALIBRE_PEPA: { text: 'Calibres Pepa' },
		TABLA_INFORMACION: { text: 'Tabla Informativa' },
	};
	

	return (
		<div className='flex rounded-full border-2 border-zinc-500/20 p-1 drop-shadow-xl dark:border-zinc-800'>
			{Object.values(OPTIONSPRO).map((i: any) => (
				<Button
					key={i.text}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...(activeTab.text === i.text ? { ...activeProps } : { ...defaultProps })}
					onClick={() => {
						setActiveTab(i);
					}}>
					{i.text}
				</Button>
			))}
		</div>
	);
};

export default ButtonsTabsProyeccion;
