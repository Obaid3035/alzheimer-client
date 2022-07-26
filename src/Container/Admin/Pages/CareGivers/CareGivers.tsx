import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import Button from "../../../../Components/Button/Button";
import Loader from '../../../../util/loader'

interface ICareGivers {
    id: number,
    name: string,
    email: string,
    nic: string,
    phoneNumber?: string
}

const CareGivers = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [getCareGiverData, setGetCareGiverData] = useState<ICareGivers[]>([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        const products = [
            {
                id: 1,
                name: 'obaid-ur-rehman',
                email: "obaid3035@gmail.com",
                nic: '4210100101',
            },
            {
                id: 2,
                name: 'aqib karim',
                email: "aqib@gmail.com",
                nic: '42424242',
            },
        ]

        setGetCareGiverData(products)
    }, [])

    const paginationOption = {
        custom: true,
        totalSize: getCareGiverData.length
    };

    const columns = [
        {
            dataField: 'id',
            text: 'Lawyer ID',
            hidden: true,
        },
        {
            dataField: 'name',
            text: 'Name'
        },
        {
            dataField: 'email',
            text: 'Email'
        },
        {
            dataField: 'nic',
            text: 'nic'
        },
        {
            dataField: 'view',
            text: 'View',
            formatter: (cellContent: string) => {
                return <Button type='button' onClick={() => navigate('/admin/details')}> View </Button>
            },
        },
        {
            dataField: 'delete Lawyer',
            text: 'Action',
            formatter: (cellContent: string) => {
                return <Button type='button'> Delete </Button>
            },
        }
    ];

    return (
        <div className={'page_responsive'}>
            <h1>CareGivers</h1>
            <div className={'mt-5'}>
                {loading ? <Loader /> :
                    <PaginationProvider
                        pagination={paginationFactory(paginationOption)}
                    >
                        {
                            (props: any) => (
                                <div>
                                    <BootstrapTable keyField='id' data={getCareGiverData} columns={columns} {...props.paginationTableProps} />
                                </div>
                            )
                        }
                    </PaginationProvider>
                }
            </div>
        </div>
    );
};

export default CareGivers;
