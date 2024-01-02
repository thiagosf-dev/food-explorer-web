import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;
    }
  }

	body {
		background-color: ${({ theme }) => theme.COLORS.DARK_400};
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	body, input, button, textarea, h1, h2 {
    font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		outline: none;
	}

	a {
		text-decoration: none;
	}

	a, button {
		cursor: pointer;
		transition: filter .2s;
	}

	a:hover, button:hover {
		filter: brightness(.9);
	}
`;
