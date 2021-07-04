What is expected for Workers (hopefully):
- Passing native handles around (e.g. sockets, http request)
- Deadlock detection. Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. Deadlock detention will be useful for Worker threads in this case.
- More isolation, so if one process is affected, it won’t affect others.

What NOT to expect for Workers:
- Don’t think Workers make everything magically faster, in some cases is better to use Worker pool.
- Don’t use Workers for parallelizing I/O operations.
- Don’t think spawning Workers is cheap.

link: https://nodesource.com/blog/worker-threads-nodejs/
