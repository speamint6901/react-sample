import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnry } from "../components/templetes/HeaderOnry";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnry>
            <Users />
          </HeaderOnry>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
