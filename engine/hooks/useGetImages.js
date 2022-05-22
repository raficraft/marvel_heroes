import React, { useState, useEffect } from "react";

/**
 *
 * @param {array} directory
 * @returns
 */

export default function useGetimages(directory) {
  const [loading, setLoading] = useState(true);
  const [filesInfo, setFilesInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filesArray = [];
      const callApi = async (folder) => {
        console.log({ folder });
        const bodyRequest = {
          dir: `assets/${folder}`,
        };

        const res = await fetch("/api", {
          method: "POST",
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        try {
          const allFiles = await res.json();

          console.log({ allFiles });
          for (const f of allFiles) {
            console.log({ f });
            const i = await import(`/public/assets/${folder}${f}`);
            filesArray.push(i.default);
          }
          setLoading(false);
        } catch (error) {
          console.log({ error });
          return false;
        }
      };

      for (const folder of directory) {
        await callApi(folder);
      }
      setFilesInfo(filesArray);
    };
    fetchData();
  }, []);

  return [filesInfo];
}
