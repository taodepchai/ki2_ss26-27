import Header from "./TodoListHeader";
import Form from "./TodoListForm";

import TabsContent from "./TodoListTabsContent";

let Bt10 = () => {
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo list</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
    rel="stylesheet"
  />
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div
        className="row d-flex justify-content-center align-items-center
              h-100"
      >
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <Header></Header>
              <Form></Form>
              {/* Tabs navs */}
              <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active">Tất cả công việc</a>
                </li>
              </ul>
              {/* Tabs content */}
                <TabsContent></TabsContent>
              {/* Tabs content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    )
}

export default Bt10;