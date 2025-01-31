import React from "react";
import { localTheme } from "../../../theme";
import { Arrow } from "../../../svg/Arrow";
import { selectWrapperStyles, inputStyles } from "../Input.styles";
import { Label } from "../../Label";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	label,
	theme = localTheme,
	fullWidth = true,
	...props
}) {
	return (
		<>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
			<div
				css={selectWrapperStyles(
					theme,
					size,
					success,
					error,
					fullWidth,
				)}
			>
				<select
					className={className}
					css={inputStyles(
						theme,
						"text",
						size,
						props.disabled,
						success,
						error,
						fullWidth,
					)}
					{...props}
				>
					{children}
				</select>
				<Arrow />
			</div>
		</>
	);
}

export { Select };
