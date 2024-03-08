import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../../components/layouts/Container/Container';
import { appPages } from '../../../config/pages.config';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/icon/Icon';
import Input from '../../../components/form/Input';
import TableTemplate, {
	TableCardFooterTemplate,
} from '../../../templates/common/TableParts.template';
import Badge from '../../../components/ui/Badge';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownNavLinkItem,
	DropdownToggle,
} from '../../../components/ui/Dropdown';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../components/layouts/Subheader/Subheader';
import FieldWrap from '../../../components/form/FieldWrap';
import { useAuth } from '../../../context/authContext';
import { format } from "@formkit/tempo"
import { TConductor } from '../../../types/registros types/registros.types';
import ModalRegistro from '../../../components/ModalRegistro';
import FormularioRegistroChoferes from '../Formularios Registro/FormularioRegistroChoferes';






const columnHelper = createColumnHelper<TConductor>();

const editLinkProductor = `/app/conductores/`
const createLinkProductor = `/app/registro-conductor/`

const columns = [
	columnHelper.accessor('rut', {
		cell: (info) => (
			<Link to={`${editLinkProductor}${info.row.original.id}`}>
				<div className='font-bold'>{`${info.row.original.rut}`}</div>
			</Link>
		),
		header: 'Rut',
	}),
	columnHelper.accessor('nombre', {
		cell: (info) => (
			<Link to={`${editLinkProductor}${info.row.original.id}`}>
				<div className='font-bold '>{`${info.row.original.nombre}`}</div>
			</Link>
		),
		header: 'Nombre',
	}),
	columnHelper.accessor('apellido', {
		cell: (info) => (
			<Link to={`${editLinkProductor}${info.row.original.id}`}>
				<div className='font-bold truncate'>{`${info.row.original.apellido}`}</div>
			</Link>
		),
		header: 'Apellido',
	}),
	columnHelper.accessor('telefono', {
		cell: (info) => (
			<Link to={`${editLinkProductor}${info.row.original.id}`}>
				<div className='font-bold'>{`${info.row.original.telefono}`}</div>
			</Link>
		),
		header: 'Telefono',
	}),
	columnHelper.accessor('fecha_creacion', {
		cell: (info) => (
			<Link to={`${editLinkProductor}${info.row.original.id}`}>
				<div className='font-bold'>{`${format(info.row.original.fecha_creacion, { date: 'short', time: 'short' })}`}</div>
			</Link>
		),
		header: 'Fecha Creación',
	}),
	
	

];

interface IConductorProps {
	data: TConductor[] | []
	refresh: Dispatch<SetStateAction<boolean>>
}


const TablaConductor : FC<IConductorProps> = ({ data, refresh }) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState<string>('')
	const [modalStatus, setModalStatus] = useState<boolean>(false)



	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: { pageSize: 5 },
		},
	});

	return (
		<PageWrapper name='ListaConductores'>
			<Subheader>
				<SubheaderLeft>
					<FieldWrap
						firstSuffix={<Icon className='mx-2' icon='HeroMagnifyingGlass' />}
						lastSuffix={
							globalFilter && (
								<Icon
									icon='HeroXMark'
									color='red'
									className='mx-2 cursor-pointer'
									onClick={() => {
										setGlobalFilter('');
									}}
								/>
							)
						}>
						<Input
							id='search'
							name='search'
							placeholder='Busca al conductor...'
							value={globalFilter ?? ''}
							onChange={(e) => setGlobalFilter(e.target.value)}
						/>
					</FieldWrap>
				</SubheaderLeft>
				<SubheaderRight>
					<ModalRegistro
							open={modalStatus} 
							setOpen={setModalStatus} 
							title='Registro Conductores'
							textButton='Agregar Conductor'
							size={900}
							>
						<FormularioRegistroChoferes refresh={refresh} setOpen={setModalStatus}/>
					</ModalRegistro>
				</SubheaderRight>
			</Subheader>
			<Container>
				<Card className='h-full'>
					<CardHeader>
						<CardHeaderChild>
							<CardTitle>Conductores</CardTitle>
							<Badge
								variant='outline'
								className='border-transparent px-4'
								rounded='rounded-full'>
								{table.getFilteredRowModel().rows.length} registros
							</Badge>
						</CardHeaderChild>
						<CardHeaderChild>
						</CardHeaderChild>
					</CardHeader>
					<CardBody className='overflow-auto'>
						<TableTemplate className='table-fixed max-md:min-w-[70rem]' table={table} />
					</CardBody>
					<TableCardFooterTemplate table={table} />
				</Card>
			</Container>
		</PageWrapper>
	);
};

export default TablaConductor;
