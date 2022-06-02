import React from "react";
import {
    Typography,
    Grid,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Button,
    SelectChangeEvent
} from '@mui/material';
import {
    ChevronRight,
    ChevronLeft
} from '@mui/icons-material';

const PaginationComponent: React.FC<{
    page: number,
    setPage: any,
    rowsPerPage: number,
    setRowsPerPage: any,
    maxPage: number
}> = (props) => {


    const handleChange = (event: SelectChangeEvent) => {
        props.setRowsPerPage(parseInt(event.target.value, 10));
        props.setPage(1);
    };

    const handleClickLeft = (): void => {
        if (props.page > 1) {
            props.setPage(props.page - 1)
        }
    }

    const handleClickRight = (): void => {
        if (props.page < props.maxPage) {
            props.setPage(props.page + 1)
        }
    }


    return (
        <Grid container sx={{ maxHeight: 25 }}>
            <Grid item>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: "right", padding: 1 }}>Podaj ilość ksiażek do wyświetlenie</Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ padding: 1 }}>
                    <Select
                        id="rowsPerPage-select"
                        value={(props.rowsPerPage).toString()}
                        onChange={handleChange}
                        sx={{ maxHeight: 25 }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
              </Grid>
            <Grid item xs={1} textAlign="right" >
                <Typography variant="body1" component="div" sx={{ textAlign: "center", padding: 1 }}>Strona {props.page} z {props.maxPage}</Typography>
            </Grid>
            <Grid item xs={2} >
                <Button type="button" disabled={props.page === 1} onClick={handleClickLeft}>
                    <ChevronLeft />
                </Button>
            {/* </Grid>
            <Grid item xs={1}> */}
                <Button type="button" disabled={props.page === props.maxPage} onClick={handleClickRight}>
                    <ChevronRight />
                </Button>
            </Grid>
        </Grid>

    )
}

export default PaginationComponent;
