import * as React from "react";
import Card from "@mui/material/Card";

export default function BasicCard({ className, children, onClick }) {
	return (
		<Card onClick={onClick} className={className}>
			{children}
		</Card>
	);
}
