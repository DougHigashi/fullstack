

export default function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>01/02/2021</td>
                        <td>John Doe</td>
                        <td>23</td>
                        <td>12</td>
                        <td>103.75</td>
                    </tr>
                    <tr>
                        <td>20/01/2021</td>
                        <td>Ellen Howl</td>
                        <td>60</td>
                        <td>56</td>
                        <td>1084.12</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Raphael Batista</td>
                        <td>120</td>
                        <td>120</td>
                        <td>100000.50</td>
                    </tr>
                    <tr>
                        <td>19/09/2020</td>
                        <td>Alan Poe</td>
                        <td>58</td>
                        <td>32</td>
                        <td>5743.90</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

