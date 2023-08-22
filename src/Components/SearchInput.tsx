"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import useDebounce from "@/Hooks/useDebounce";
import { useRouter } from "next/navigation";
import qs from "query-string";

const SearchInput = () => {

    const [value, setValue] = useState<string>("");

    const debouncedValue = useDebounce<string>(value, 500);

    const router = useRouter();

    useEffect(() => {

        const query = {
            title: debouncedValue
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query
        });

        router.push(url);

    }, [debouncedValue, router]);

    return (
        <Input
            placeholder="What do you want to listen to?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
};

export default SearchInput;