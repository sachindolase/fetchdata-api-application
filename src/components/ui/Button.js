import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage({ variant, text, onClick }) {
	return (
		<Button onClick={onClick} variant={variant || "contained"}>
			{text || "MUI button"}
		</Button>
	);
}
