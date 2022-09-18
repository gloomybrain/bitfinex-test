# How to run this?

The following command is going to start up a bunch of containers to emulate a distributed exchange built around DTH idea. In particular 3 grape nodes are spun up along with 2 clients.

```bash
docker compose up --build --remove-orphans
```

# Limitations

This implementation stays away from different currencies (i.e. assuming there is just one resource that is traded). I believe it would work exactly the same with multiple currencies as it does with one.

# How is this supposed to work?

The key idea behind this is that for each particular limit there is an assigned instance of a client. E.g. if I want to place a BUY order for 200 shares at $10 maximum price the first thing that happens is determining who is the owner of $10 limit.  
Once the id of the limit owner is known the order is directed right there. The `register-limit.js` file has the related code.

The result of the `register-limit` RPC call is the name of the server that is in charge of this particular limit. Technically it is the name of the RPC call to make. For instance this could be `place-order:node-1` which implies that previously a node has been announced with a name `place-order:node-1`. The `place-order:node-1` node is in charge of placing and executing the orders with a particular limit whereas the node announced as `register-limit` is in charge of distirubuting the limits between other nodes.
The next step is to place the actual order in the DTH which is made by executing the RPC call. This would lead to placing the order on the dedicated node.

# What went wrong?

Due to the lack of documentation regarding the grenache libraries and also due to vaguely typed source code (well, it's javascript, what else could one expect) my performance was really slow. I barely made my services connect to each other. This was such a time consuming thing that **I consider my overall result as a complete failure**.

Although the `register-limit` RPC executor announces itself every second I still get the following error on the cient:

```
grenache:grape lookup register-limit found 0 nodes
```

This is obviously some configuration issue but unfortunately I wasn't able to figure it out during a reasonable amount of time.
