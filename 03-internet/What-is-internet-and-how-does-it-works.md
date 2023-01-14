# What is internet and how does it work
The internet is a global network of interconnected computers and servers that communicate with each other using standardized protocols. It allows users to access and share information, communicate with each other, and perform a wide range of other tasks.

Here is a brief overview of how the internet works:

### Data is broken down into packets: 
When you send or receive information over the internet, it is first broken down into small packets of data. Each packet contains a portion of the original data as well as routing information that tells it where to go.

### The packets are sent over the network: 
Each packet is then sent over the network, typically using a wired or wireless connection, to its destination. The packets may travel through multiple networks and devices before reaching their destination.

### Packets are reassembled: 
Once the packets reach their destination, they are reassembled into their original form and delivered to the intended recipient.

### Transmission Control Protocol (TCP) and Internet Protocol (IP) : 
The packets are sent over the internet using two main protocols, the Transmission Control Protocol (TCP) and the Internet Protocol (IP). TCP is responsible for breaking the data down into packets and reassembling it at the destination, while IP is responsible for routing the packets to the correct destination.

### DNS: 
**What/Why?** To access a website or a specific page, you need to know the IP address of the server where it is hosted. The Domain Name System (DNS) is a service that translates domain names (like www.example.com) into IP addresses (like 216.58.192.174), so that the browser can find the correct server.

**What/Why?**: DNS stands for Domain Name System. It is a system used to translate human-friendly domain names, such as "www.example.com," into the IP addresses used by computers to identify each other on the internet.

**How?** Here's an overview of how DNS works:
- The user types a domain name, such as "www.example.com" into their web browser.
- The web browser sends a request to a DNS server to resolve the domain name to an IP address.
- The DNS server looks up the domain name in its database and returns the corresponding IP address.
- The web browser uses the IP address to send an HTTP request to the server where the website is hosted.
- The server responds with the requested webpage, which the browser then renders and displays on the user's device.

DNS servers are located in various countries around the world. They are operated by a variety of organizations, including internet service providers (ISPs), domain name registrars, and other companies that provide DNS services.

The location of DNS servers can be important for several reasons, such as:

**Latency:** The physical distance between a user's device and a DNS server can affect the time it takes for the server to respond to a request. If the DNS server is located far away from the user, it may take longer for the server to respond and for the user to access the website.

**Security:** DNS servers can be vulnerable to hacking and other types of cyberattacks. By hosting DNS servers in multiple locations, organizations can help to protect against such attacks by distributing the risk across different locations.

**Censorship:** Some countries may block access to certain websites or online content. By hosting DNS servers in multiple locations, organizations can help to ensure that users in those countries can still access the blocked content.

It's important to note that DNS servers are distributed worldwide, it's not confined to a specific country, and it's not centralized. This allows for a more robust and resilient system, as well as providing faster lookups for users around the world.

### HTTP:
Once the browser has the IP address of the server, it can request the specific webpage using the Hypertext Transfer Protocol (HTTP). The server responds by sending the requested webpage to the browser, which then renders it on the user's device.

When you're browsing the internet, you're likely interacting with hypertext all the time. For example, when you see a word or phrase underlined and in blue color, that's a hyperlink, when you click on it, it will take you to another webpage.

In simple terms, Hypertext is the way text can contain links to other text which allows users to navigate and access to related information easily.


