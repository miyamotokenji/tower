import { SvgIcon } from '@material-ui/core';
import * as React from 'react';

export const icons = (name: string) => {
    switch (name) {
        case 'dashboard':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <path
                        d="M12.04 3.5L9.53 6H14.53L12.04 3.5ZM4 8V21H20V8H4ZM12 1L17 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23H4C3.46957 23 2.96086 22.7893 2.58579 22.4142C2.21071 22.0391 2 21.5304 2 21V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H7L12 1ZM7 19V15H12V19H7ZM14 18V11H18V18H14ZM6 13V10H11V13H6Z"
                        id="svg_1"
                        fill="#979797"
                        stroke="null"
                    />
                </SvgIcon>
            );
        case 'admin':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <path
                        d="M12 15C7.58 15 4 16.79 4 19V21H20V19C20 16.79 16.42 15 12 15ZM8 9C8 10.0609 8.42143 11.0783 9.17157 11.8284C9.92172 12.5786 10.9391 13 12 13C13.0609 13 14.0783 12.5786 14.8284 11.8284C15.5786 11.0783 16 10.0609 16 9H8ZM11.5 2C11.2 2 11 2.21 11 2.5V5.5H10V3C10 3 7.75 3.86 7.75 6.75C7.75 6.75 7 6.89 7 8H17C16.95 6.89 16.25 6.75 16.25 6.75C16.25 3.86 14 3 14 3V5.5H13V2.5C13 2.21 12.81 2 12.5 2H11.5Z"
                        fill="#979797"
                        id="svg_5"
                        stroke="null"
                    />
                </SvgIcon>
            );
        case 'orders':
            return (
                <SvgIcon viewBox="0 0 24 24">
                    <path
                        d="M19 3.97857H14.82C14.25 2.41857 12.53 1.61857 11 2.17857C10.14 2.47857 9.5 3.13857 9.18 3.97857H5C4.46957 3.97857 3.96086 4.18928 3.58579 4.56436C3.21071 4.93943 3 5.44814 3 5.97857V19.9786C3 20.509 3.21071 21.0177 3.58579 21.3928C3.96086 21.7679 4.46957 21.9786 5 21.9786H19C19.5304 21.9786 20.0391 21.7679 20.4142 21.3928C20.7893 21.0177 21 20.509 21 19.9786V5.97857C21 5.44814 20.7893 4.93943 20.4142 4.56436C20.0391 4.18928 19.5304 3.97857 19 3.97857ZM12 3.97857C12.2652 3.97857 12.5196 4.08393 12.7071 4.27146C12.8946 4.459 13 4.71335 13 4.97857C13 5.24379 12.8946 5.49814 12.7071 5.68568C12.5196 5.87321 12.2652 5.97857 12 5.97857C11.7348 5.97857 11.4804 5.87321 11.2929 5.68568C11.1054 5.49814 11 5.24379 11 4.97857C11 4.71335 11.1054 4.459 11.2929 4.27146C11.4804 4.08393 11.7348 3.97857 12 3.97857ZM10 16.9786H8V9.97857H5L9 5.97857L13 9.97857H10V16.9786ZM15 19.9786L11 15.9786H14V8.97857H16V15.9786H19L15 19.9786Z"
                        id="svg_2"
                        fill="#979797"
                        stroke="null"
                    />
                </SvgIcon>
            );
        case 'orderbooks':
            return (
                <SvgIcon viewBox="0 0 24 24" >
                    <path
                        d="M17 10H7V8H17V10ZM17 14H7V12H17V14ZM14 18H7V16H14V18ZM12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4ZM19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4Z"
                        fill="#979797"
                        id="svg_3"
                        stroke="null"
                    />
                </SvgIcon>
            );
        case 'withdrawal':
            return (
                <SvgIcon viewBox="0 0 24 24" >
                    <path
                        d="M3 6H21V18H3V6ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM7 8C7 8.53043 6.78929 9.03914 6.41421 9.41421C6.03914 9.78929 5.53043 10 5 10V14C5.53043 14 6.03914 14.2107 6.41421 14.5858C6.78929 14.9609 7 15.4696 7 16H17C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14V10C18.4696 10 17.9609 9.78929 17.5858 9.41421C17.2107 9.03914 17 8.53043 17 8H7Z"
                        fill="#979797"
                        id="svg_4"
                        stroke="null"
                    />
                </SvgIcon>
            );
        default:
            return (
                <SvgIcon />
            );
    }
};
