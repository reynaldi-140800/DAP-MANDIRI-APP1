# Data Binding

# string interpolation (one way dari ts ke html)
- syntax di ts: const expression = 'halo'
- syntax di html: {{ expression }}

# event (one way dari html ke ts)
- syntax di html: (target)="statement"	

# two-way

# data binding tidak bisa assigning, hanya bisa expression
- {{ 10 + 10 }} tampilnya 20
- {{ name='pluto' }} ini error karena gabisa assigning

# jika mau binding object gabisa secara literal
- {{ object }} -> ini ga error tapi datanya ga tampil
- {{ object.key }} -> baru bisa