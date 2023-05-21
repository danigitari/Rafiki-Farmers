import React, { useEffect, useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

export function TableComponent({ name, columns, data }) {
	const [selectedItems, setSelectedItems] = useState([]);

	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		name: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
		},
		'country.name': {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
		},
		representative: { value: null, matchMode: FilterMatchMode.IN },
		date: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
		},
		balance: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
		},
		status: {
			operator: FilterOperator.OR,
			constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
		},
		activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
	});
	const [globalFilterValue, setGlobalFilterValue] = useState('');

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		let _filters = { ...filters };

		_filters['global'].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const renderHeader = () => {
		return (
			<div className='flex justify-between flex-wrap gap-2 justify-content-between align-items-center'>
				<h4 className='m-0 pt-3 '>{name}</h4>
				<span className='p-input-icon-left'>
					<i className='pi pi-search' />
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder='Keyword Search'
					/>
				</span>
			</div>
		);
	};

	const header = renderHeader();
    useEffect(() => {
        console.log(data)
    }, [data]);

	return (
    <div className=" w-full ">
      <div className="card bg-white m-5 p-5 rounded-md shadow-md text-md">
        <DataTable
          value={data}
          paginator
          header={header}
          rows={10}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          rowsPerPageOptions={[10, 25, 50]}
          dataKey="id"
          showGridlines
          selectionMode="checkbox"
          selection={selectedItems}
          onSelectionChange={(e) => setSelectedItems(e.value)}
          filters={filters}
          filterDisplay="menu"
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "balance",
            "status",
          ]}
          emptyMessage={`No ${name} found.`}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "2rem" }}
          ></Column>
          {columns.map((column) => (
            <Column
              field={column}
              header={column.charAt(0).toUpperCase() + column.slice(1)}
              sortable
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "6rem" }}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}
