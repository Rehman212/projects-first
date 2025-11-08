"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { makeData } from "../app/makeData";

const Datatables = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "firstName", header: "First Name", size: 150 },
      { accessorKey: "middleName", header: "Middle Name", size: 150 },
      { accessorKey: "lastName", header: "Last Name", size: 150 },
      { accessorKey: "email", header: "Email Address", size: 300 },
      { accessorKey: "phoneNumber", header: "Phone Number", size: 250 },
      { accessorKey: "address", header: "Address", size: 300 },
      { accessorKey: "zipCode", header: "Zip Code" },
      { accessorKey: "city", header: "City" },
      { accessorKey: "state", header: "State" },
      { accessorKey: "country", header: "Country", size: 350 },
      { accessorKey: "petName", header: "Pet Name" },
      { accessorKey: "age", header: "Age" },
      { accessorKey: "salary", header: "Salary" },
      { accessorKey: "dateOfBirth", header: "Date of Birth" },
      { accessorKey: "dateOfJoining", header: "Date of Joining" },
      { accessorKey: "isActive", header: "Is Active" },
    ],
    []
  );

  const rowVirtualizerInstanceRef = useRef(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(makeData(10000));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex(0);
    } catch (e) {
      console.log(e);
    }
  }, [sorting]);

  const table = useMantineReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableGlobalFilterModes: true,
    enablePagination: false,
    enablePinning: true,
    enableRowNumbers: true,
    enableRowVirtualization: true,
    mantineTableContainerProps: {
      sx: { maxHeight: "600px", width: "100%",  },
    },
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerInstanceRef,
    rowVirtualizerProps: { overscan: 5 },
    columnVirtualizerProps: { overscan: 2 },
  });

  return (
    <div className="w-[79vw] h-[78vh] overflow-hidden">
      <MantineReactTable table={table} />
    </div>
  );
};

export default Datatables;
