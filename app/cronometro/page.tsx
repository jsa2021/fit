"use client";
import React from "react";
import Timer from '../../components/Timer';
import { Divider } from "@nextui-org/divider";

import { title } from "@/components/primitives";

export default function CronometroPage() {

	const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


	return (
		<div>
			<h1 className={title()}>Cronómetro</h1>
			<Divider className="my-4" />
			<Timer interval={1000} /> {/* Intervalo de actualización de 1 segundo */}

		</div>
	);
}
